import Directory from "../../components/directory/directory.component"

const Home=()=>{
    const Categories=[
        {
            id:1,
            title:'men',
            imageUrl:'https://media.istockphoto.com/photos/elegant-gentleman-picture-id639275740?k=20&m=639275740&s=612x612&w=0&h=BzOMGC7nPxzzs7C00G5jM9gFMYmN3aWhWwXTYYZ3f2Q='
        },
        {
            id:2,
            title:'women',
            imageUrl:'https://media.istockphoto.com/photos/portrait-stylish-smiling-woman-with-shopping-bags-wearing-blue-faux-picture-id1190136840?k=20&m=1190136840&s=612x612&w=0&h=fYRYWFwYxBkh5NaRNzivGbxS7W7E3qXuLe_QFaCgEkA='
        },
        {
            id:3,
            title:'children',
            imageUrl:'https://media.istockphoto.com/photos/cute-stylish-children-picture-id537307742?k=20&m=537307742&s=612x612&w=0&h=sSAkRQcSU-amON0PHyayG1Fv3GFO5oJxcUApycUszVI='
        },
        {
            id:4,
            title:'hats',
            imageUrl:'https://media.istockphoto.com/photos/selection-of-panama-hats-cartagena-colombia-latin-america-picture-id899140184?k=20&m=899140184&s=612x612&w=0&h=TdVz_DtBZjwMyrG4MTGUIpqVbW7GOTL13nu95CmO1to='
        },
        {
            id:5,
            title:'jackets',
            imageUrl:'https://media.istockphoto.com/photos/good-looking-couple-picture-id658938882?k=20&m=658938882&s=612x612&w=0&h=iAWjKWCeAwUmiTGAQejlogLU7Fewkp0RZC5ePRn3bks='
        },
        {
            id:6,
            title:'sneakers',
            imageUrl:'https://media.istockphoto.com/photos/colorful-sport-shoes-on-mustard-color-backround-picture-id1208683466?k=20&m=1208683466&s=612x612&w=0&h=ySClNtSte7-nmRXcyU_2OcLTqWYF9nir1KDsLe53IIM='
        },
        {
            id:7,
            title:'sunglasses',
            imageUrl:'https://media.istockphoto.com/photos/woman-hand-holding-eyeglasses-optical-store-glasses-selection-eye-picture-id1250311034?k=20&m=1250311034&s=612x612&w=0&h=M1DTcUFPMupyQAK94VYfDiZUXQrnaa9skxAk3q7HLRs='
        },
        {
            id:8,
            title:'watch',
            imageUrl:'https://media.istockphoto.com/photos/businessman-checking-time-from-watch-picture-id533714204?k=20&m=533714204&s=612x612&w=0&h=Ytim85RMX2yNYc-pfl1rSjZeT2TG8M0Z_Sy1ucDktX4='
        },
    ]
    return <Directory Categories={Categories}/>
}

export default Home