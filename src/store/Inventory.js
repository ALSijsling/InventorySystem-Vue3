import { ref, computed } from "vue"

//State
let id = 0

const products = ref([
    {id: id++, name: "Hamer", actualAmount: 25, minimumAmount: 20},
    {id: id++, name: "Schroeven", actualAmount: 100, minimumAmount: 150},
    {id: id++, name: "Spijkers", actualAmount: 250, minimumAmount: 400},
    {id: id++, name: "Houtlijm", actualAmount: 30, minimumAmount: 25},
    {id: id++, name: "Hout", actualAmount: 15, minimumAmount: 10},
    {id: id++, name: "Laminaat", actualAmount: 30, minimumAmount: 30},
    {id: id++, name: "Gordijnen", actualAmount: 10, minimumAmount: 15}
])

//Getters
export const getAllProducts = () => computed(()=> products.value)
export const getProductById = (id) => computed(()=> products.value.find(product => product.id == id))

//Actions
export const addProduct = (product) => products.value.push(product)
export const updateProduct = (product) => {
    products.value.splice(product.id, 1)
    products.value.push(product)
}