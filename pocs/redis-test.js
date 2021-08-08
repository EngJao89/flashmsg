const Redis = require('ioredis');
const redis = new Redis("redis://:fa372ec148094140ac668adad6ac1752@us1-enabling-donkey-34456.upstash.io:34456");

//redis.set("devpleno", "devpleno.com");
//redis.expire("devpleno",10);
redis.get("devpleno").then((result) =>{
  console.log(result);
});
