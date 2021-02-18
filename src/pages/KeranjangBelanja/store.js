import {store} from '@risingstack/react-easy-state';
import {dummiesCart} from '../../assets';
// ini buat semua variable / state
// dibikin initial datanya kosong semua
// [] buat data array
// 0 buat data yg int
// '' buat data string
// {} buat data object
//  false buat data boolean, contoh buat nandain klo loading.
export const state = store({
  listCart: [],
  total: 0,
  items: 0,
  isLoading: false,
});

export function initialized() {
  state.isLoading = true;
  setListCart(dummiesCart);
  setTimeout(() => {
    state.isLoading = false;
  }, 1000);
}
export function cleanUp() {
  state.listCart = [];
  state.total = 0;
  state.items = 0;
  state.isLoading = false;
}
const x = dummiesCart;
export function setListCart(val = []) {
  if (val.length > 0) {
    let items = [];
    let total = 0;
    let totalItems = 0;
    val.map((item) => {
      var objectCart = {
        id: item.id ?? '',
        image: item.image ?? null,
        price: item.price ?? 0,
        discount_price: item.discount_price ?? 0,
        name: item.name ?? '',
        stock: item.stock ?? 0,
        pcs: 1,
      };
      items.push(objectCart);
      total = total + objectCart.pcs * objectCart.discount_price;
      totalItems = objectCart.pcs + totalItems;
    });
    state.items = totalItems;
    state.total = total;
    state.listCart = items;
  }
}

export function addItems(id) {
  var total = 0;
  var items = 0;
  for (var i = 0; i < state.listCart.length; i++) {
    if (state.listCart[i].id === id) {
      if (state.listCart[i].stock == state.listCart[i].pcs) {
        total =
          total + state.listCart[i].pcs * state.listCart[i].discount_price;
        items = items + state.listCart[i].pcs;
      } else {
        state.listCart[i].pcs = state.listCart[i].pcs + 1;
        total =
          total + state.listCart[i].pcs * state.listCart[i].discount_price;
        items = items + state.listCart[i].pcs;
      }
    } else {
      total = total + state.listCart[i].pcs * state.listCart[i].discount_price;
      items = items + state.listCart[i].pcs;
    }
  }
  state.total = total;
  state.items = items;
}
export function minItems(id) {
  var total = 0;
  var items = 0;
  for (var i = 0; i < state.listCart.length; i++) {
    if (state.listCart[i].id === id) {
      if (state.listCart[i].pcs == 1) {
        removeItem(id);
      } else {
        state.listCart[i].pcs = state.listCart[i].pcs - 1;
        total =
          total + state.listCart[i].pcs * state.listCart[i].discount_price;
        items = items + state.listCart[i].pcs;
      }
    } else {
      total = total + state.listCart[i].pcs * state.listCart[i].discount_price;
      items = items + state.listCart[i].pcs;
    }
  }
  state.total = total;
  state.items = items;
}
export function removeItem(id) {
  var list = state.listCart;
  var indexOf = list.findIndex((obj) => obj.id == id);
  var total = 0;
  var items = 0;
  list.splice(indexOf, 1);
  state.listCart = list;
  state.listCart.map((item) => {
    total = total + item.pcs * item.discount_price;
    items = items + item.pcs;
  });
  state.items = items;
  state.total = total;
}
