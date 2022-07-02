import SimpleLayout from "../../component/layouts/sample"
import connectToDatabase from "../../db/mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Restaurant({restaurants}) {

    const router = useRouter()

    const changeLimitRestaurant = (e) => {
        e.preventDefault();
        const url = `restaurant?paginate=`+e.target.value;
        router.push(`${url}`);
    }

    return (
        <SimpleLayout>
            <Head>
                <title>Restaurant List</title>
            </Head>
            <div className="row">
               <div className="col-5">
                   <center>
                       <h3>
                           List of restaurant in USA
                       </h3>
                   </center>
               </div>
                <div className="col-2 offset-5">
                    <label htmlFor="">Get Number of Restaurant</label>
                    <select name="getRestaurant" id="getRestaurant" className="form-control" onClick={ (e) => changeLimitRestaurant(e)}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <div className="row">
                        {
                            restaurants.map((restaurant) => (
                               <div className="col-3 mt-2" key={restaurant._id}>
                                   <div className="card">
                                       <div className="card-body">
                                           <h5 className="card-title">{ restaurant.name }</h5>
                                           <p className="card-text">
                                              Building: { restaurant.address.building }
                                               <br/>
                                               Street: { restaurant.address.street }
                                               <br/>
                                               Restaurant Id: { restaurant.restaurant_id }
                                           </p>
                                           <span className="btn btn-sm btn-outline-warning">
                                               <Link href={`/restaurant/${restaurant._id}`} style={{ textDecoration: "none" }}>
                                                   View Detail
                                               </Link>
                                           </span>
                                       </div>
                                   </div>
                               </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SimpleLayout>
    )
}

export async function getServerSideProps(context) {

    const limitPaginate = context.query.paginate ? parseInt(context.query.paginate) : 10;

    const client = await connectToDatabase;
    let db = client.db("kathford");

    const restaurant = await db.collection('restaurent').find({}).limit(limitPaginate).toArray();

    let response = JSON.parse(JSON.stringify(restaurant));

    return {
        props: {
            restaurants: response
        }
    }
}