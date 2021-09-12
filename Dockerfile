ARG BASE_IMAGE=node:alpine

# ================================================================
# builder stage
# ================================================================
FROM $BASE_IMAGE as builder

ENV NODE_ENV homolog

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY . ./

RUN yarn install
RUN yarn build

# ================================================================
# final deploy stage
# ================================================================
FROM $BASE_IMAGE

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV homolog

USER nextjs

EXPOSE 3000
CMD ["yarn", "start"]
