import Product from "../models/ProductsModel.js";


export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({message:"Success",data:products})
    } catch (error) {
        res.status(400).json({message:"Error while trying to fetch Blinds.",error:error})
        console.log("Error in Products Controller.",error);
    }
}

export const getOneProducts = async(req,res)=>{
    try {
        const Id = req  .params.id;
        const findproduct = await Product.findById({_id:Id})
            if(!findproduct){
                res.status(400).json({message:"Product already exist"})
            }else{
                res.status(200).json(findproduct)
        }
    } catch (error) {
        res.status(400).json({message:"Error while trying to fetch Blinds."})
        console.log("Error in Products Controller.",error);
    }
}

export const postProducts = async(req,res)=>{
    try {
        const {title,category,features,description} = req.body;
        const imageUrl = req.file ? req.file.path : null;

        let parsedFeatures = features;
        if (typeof features === 'string') {
            try {
                parsedFeatures = JSON.parse(features);
            } catch (err) {
                // Fallback: If comma-separated string like "Waterproof, Wipeable, UV Protection"
                parsedFeatures = features.split(',').map(f => f.trim());
            }
        }

        const newProduct = new Product({
            title,
            category,
            features:parsedFeatures,
            description,
            image:imageUrl,
        })
       await newProduct.save();
        //Find Product
        // const FindProduct = Product.find({})
        // if(!FindProduct){
        //     res.status(400).json({message:"Product already exist"})
        // }
        res.status(200).json({message:"Success", data:newProduct})
    } catch (error) {
          res.status(400).json({message:"Error while trying to add Blinds."})
        console.log("Error in Products Controller.",error);
    }
}



export const updateProducts = async(req,res)=>{
    try {
        const Id = req.params.id;
        const {image,title,category,features,description} = req.body;
        const Updated =  await Product.findByIdAndUpdate(Id,{
            image,
            title,
            category,
            features,
            description
        })
        res.status(200).json({message:"Updated Successfully!"})
    } catch (error) {
         res.status(400).json({message:"Error while trying to update Blinds."})
        console.log("Error in Update Products Controller.",error);
    }
}

export const deleteProducts = async(req,res)=>{
    const Id = req.params.id;
    await Product.deleteMany()
    res.status(200).json({message:"Deleted Successfully"})
}