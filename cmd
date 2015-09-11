fis3 server start -p 8051 --root ./output/
fis3 release -w   //监听 并且 释放版本
fis3 release dev --root ./src --file ./fis-conf.js -w
fis3 release --root ./src --file ./fis-conf.js