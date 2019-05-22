import onerIO from 'natty-fetch'
onerIO.setGlobal({
  // 配置整个项目所有接口的参数中都包含`__token`字段
  // data: {
  //   __token: 'project_token_string'
  // }
});

// 先创建一个上下文对象，这里配置了该场景下的三个接口所共享的地址前缀`urlPrefix`。
const context = onerIO.context({
  urlPrefix: 'http://localhost:8080/'
});

// 再使用上下文对象的`create()`方法，分别定义三个接口。
context.create({
  // 添加商品
  'cart.add': {
    url: 'addItem.do',
    // config: {
    //   path: './qqq'
    // },
  },
  // 删除商品
  'cart.remove': {
    url: 'removeItem.do',
    data: {
        // 省略，如：商品id
    }
  },
  // 付款
  'cart.pay': {
    url: 'pay.do'
  }
});


export default context.api;