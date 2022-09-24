//ejemplo

// let marcas = ['Toyota', 'Nissan', 'Chevrolet', 'Honda']
// console.log(marcas) // muestra todo el arreglo
// console.log(marcas[1])
// console.log(marcas[3])
// console.log(marcas.length) // indica el tamaño del array

let marcas = [
    {
        marca: 'Toyota',
        imagen: 'toyota',
        descripcion: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },
    {
        marca: 'Nissan',
        imagen: 'nissan',
        descripcion: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
       
    },
    {
        marca: 'Chevrolet',
        imagen: 'chevrolet',
        descripcion: 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    },
    {
        marca: 'Honda',
        imagen: 'honda',
        descripcion: 'lorem ipsum dolor sit amet consectetur adipiscing elit'

    }
]

console.log(marcas)

for(let i = 0; i<=marcas.length; i++ ){
    console.log('Salida----------->',marcas[i])

}