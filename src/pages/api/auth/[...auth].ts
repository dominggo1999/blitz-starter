// src/pages/api/auth/[...auth].ts
import { passportAuth } from '@blitzjs/auth'
import { api } from 'src/blitz-server'
import db from 'db'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

export default api(
  passportAuth({
    successRedirectUrl: '/',
    errorRedirectUrl: '/',
    strategies: [
      {
        authenticateOptions: {
          scope: ['profile', 'email'],
          failureRedirect: '/login',
        },
        strategy: new GoogleStrategy(
          {
            clientID: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
          },
          async function (accessToken, refreshToken, profile, done) {
            const { emails, displayName } = profile
            const email = emails && emails[0]?.value

            if (email && displayName) {
              const user = await db.user.upsert({
                where: { email },
                create: {
                  email: email.toLowerCase().trim(),
                  role: 'USER',
                  name: profile.displayName,
                },
                update: { email },
              })

              done(undefined, {
                publicData: {
                  userId: user.id,
                  roles: [user.role],
                  source: 'google',
                },
              })
            } else {
              return done(new Error("Auth response doesn't have email."))
            }
          }
        ),
      },
    ],
  })
)
