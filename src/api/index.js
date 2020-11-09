const { Router } = require('express');
const { NotFound } = require('http-errors');
const morgan = require('morgan');

const logger = require('../config/logger');

const router = Router();

/**
 * Router configuration
 */
router.use(
  morgan(
    '[:date[clf]] ":method :url HTTP/:http-version" :status - :remote-addr - :remote-user ":referrer" ":user-agent"',
    {
      stream: {
        write: message => logger.info(message),
      },
    }
  )
);

/**
 * API routes
 */
router.get('/', (req, res) => res.sendStatus(200));

/**
 * 404 error handling
 */
router.use((req, res, next) => {
  const { baseUrl, url, method } = req;

  next(new NotFound(`The route '${method} ${baseUrl}${url}' doesn't exist.`));
});

module.exports = router;
