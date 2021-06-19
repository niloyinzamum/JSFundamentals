const celery = require('celery-node');
const client = require('./client')
// client.conf.TASK_PROTOCOL = 1;

const worker = celery.createWorker(
    "amqp://",
    "amqp://"
);
worker.register("tasks.add", (a, b) => a + b);
worker.start();
