// Starter data. All students should understand this file before coding.
const SAMPLE_CATEGORIES = ['Stationery','Electronics','Groceries','Household'];
const SAMPLE_PRODUCTS = [
  {id:'P001',name:'Notebook',category:'Stationery',price:40,quantity:120,minimum:20,supplier:'Paper Co'},
  {id:'P002',name:'Pen',category:'Stationery',price:10,quantity:5,minimum:10,supplier:'WriteWell'},
  {id:'P003',name:'Mouse',category:'Electronics',price:499,quantity:35,minimum:10,supplier:'TechStore'},
  {id:'P004',name:'Detergent',category:'Household',price:199,quantity:0,minimum:10,supplier:'Home Goods'},
  {id:'P005',name:'Rice Bag',category:'Groceries',price:750,quantity:12,minimum:15,supplier:'FreshMart'}
];
const STORAGE_KEY = 'stocknest-fy-v1';
function loadData(){
  try { const raw=localStorage.getItem(STORAGE_KEY); if(raw){const parsed=JSON.parse(raw);if(Array.isArray(parsed.products)&&Array.isArray(parsed.categories)&&Array.isArray(parsed.transactions))return parsed;} }catch(e){console.warn('Storage could not be read',e)}
  return {products:structuredClone(SAMPLE_PRODUCTS),categories:[...SAMPLE_CATEGORIES],transactions:[]};
}
let store=loadData();
function saveData(){localStorage.setItem(STORAGE_KEY,JSON.stringify(store));}
