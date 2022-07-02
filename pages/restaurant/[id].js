import SimpleLayout from "../../component/layouts/sample"
import Head from "next/head";
import connectToDatabase from "../../db/mongodb";
import {ObjectId} from "mongodb";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RestaurantDetail({data}) {

    return (
        <SimpleLayout>
            <Head>
                <title>Restaurant Detail page </title>
            </Head>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>{ data.name }</h3>
                        </div>
                        <div className="card-body">
                          Street :  { data.address.street }
                            <br/>
                            Borough : { data.borough }
                            <br/>
                            Cuisine : { data.cuisine }

                            <br/>
                            Restaurant Id : { data.restaurant_id}
                        </div>
                    </div>

                    <span className="btn btn-sm btn-warning mt-2">
                       <Link href={`/restaurant`} style={{ textDecoration: '' }}>Back to list</Link>
                    </span>
                </div>
            </div>

        </SimpleLayout>
    )
}


export async function getServerSideProps(context) {

    const client = await connectToDatabase;

    let db = client.db("kathford");

    const restaurant = await db.collection('restaurent').findOne({_id: ObjectId(`${context.params.id}`)});

    let response = JSON.parse(JSON.stringify(restaurant));

    return {
        props: {
            data: response
        },
    }
}