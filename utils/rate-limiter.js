const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 1000, // max de 100 requêtes pour 10 minutes
  standardHeaders: true, // Envoie  les info du rate limit dans `RateLimit-*` headers
  legacyHeaders: false, // désactive `X-RateLimit-*` headers (ancienne version)
});

module.exports = limiter;