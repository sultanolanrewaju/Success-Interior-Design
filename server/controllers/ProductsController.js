import Product from "../models/ProductsModel.js";


export const getProducts = async(req,res)=>{
    try {
            // Check Query
         const Category = req.query.category;

      let query = {}

      if(Category && Category !== "all"){
         query.category = Category;
         console.log(query)
      }
            const limit  = req.query.limit ? Number(req.query.limit) : 0; // Default to 0 if not provided
        const products = await Product.find(query).sort({createdAt:-1}).limit(limit)
        res.status(200).json({message:"Success",data:products})
    } catch (error) {
        res.status(400).json({message:"Error while trying to fetch Blinds.",error:error})
        console.log("Error in Products Controller.",error.message);
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
        console.log("Error in Products Controller.",error.mesage);
    }
}

export const postProducts = async (req, res) => {
    try {
        // 🔍 DEBUG: Let's see what the backend is actually receiving
        console.log("📦 Incoming req.body:", req.body);
        console.log("📁 Incoming req.file:", req.file);

        const { title, category, features, description } = req.body;
        
        // Ensure image file was actually received by multer
        if (!req.file) {
            return res.status(400).json({ message: "Image file is required and was not received by the server." });
        }

        const imageUrl = req.file.path;

        let parsedFeatures = features;
        if (typeof features === 'string') {
            try {
                parsedFeatures = JSON.parse(features);
            } catch (err) {
                parsedFeatures = features.split(',').map(f => f.trim());
            }
        }

        const newProduct = new Product({
            title,
            category,
            features: parsedFeatures,
            description,
            image: imageUrl,
        });

        await newProduct.save();
        res.status(200).json({ message: "Success", data: newProduct });
    } catch (error) {
        console.error("🔥 500 SERVER CRASH DETAILS:", error.message); 
        console.error("🔍 Full Error Stack:", error.stack);
        
        res.status(500).json({ 
            message: "Error while trying to add Blinds.", 
            error: error.message 
        });
    }
};



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
        console.log("Error in Update Products Controller.",error.message);
    }
}

export const deleteProducts = async(req,res)=>{
    const Id = req.params.id;
    await Product.deleteMany()
    res.status(200).json({message:"Deleted Successfully"})
}