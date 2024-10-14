import type{NextApiRequest,NextApiResponse} from 'next'
import clientPromise from "../../lib/mongodb";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const client=await clientPromise;
    const db =client.db(process.env.MONGODB_NAME);


    switch (req.method){
        case "POST":
            try{
                const body=JSON.parse(req.body)
                if (typeof body!== "object"){
                    throw new Error('invalid request')
                }
                if (body.title==""){
                    throw new Error('invalid required')
                }
                let myExp=await db.collection("exp").insertOne(body);
                res.json ({data:myExp});
            }catch(err){
                res.status(422).json({message:err.message});
            }

            break ;
            case"GET":
            const allPost=await db.collection("exp").find({}).toArray();
            res.json({data:allPost});
            break;
            default:
                res.status(404).json({message:"page not found"});
                break;
    }
}