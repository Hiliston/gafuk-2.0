class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
		cb();
    })
  }

	calcSum(){
		let sum = 0;
        for(let one of this.goods){
            sum += one.price;	
		}
		/*this.sum = sum;*/
		/*console.log(sum);*/
		return sum
	}
	
	getMarkup(){
		return `<div class="total_sum"><h3>Товаров в каталоге на сумму: \n ${this.calcSum()}</h3></div>`
	}
	
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
	document.querySelector('.goods_price').innerHTML = this.getMarkup();
  }
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button onklick="">buy</button></div>`;
  }
	
	
}

class Basket {
	constructor() {
    this.BasketGoods = [];
  }
	fetchGoods(cb) {
    makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
      this.BasketGoods = JSON.parse(goods);
		cb();
		console.log(this.BasketGoods);
    })
  }
	getMarkupBasket(){
		return `<div class="basket_item"><h3>${this.product_name}</h3>
		<p>${this.price}</p>
		<p>${this.quantity}</p>
		</div>`;
	}
	render(){
		document.querySelector('.basket').innerHTML = this.getMarkupBasket();
	}
}


function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});

const basket = new Basket();
basket.fetchGoods(() => {
  basket.render();
});


/*list.calcSum();*/