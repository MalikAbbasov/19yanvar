import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./add.scss"

function Addpage() {
    const [product, setProduct] = useState([])
    const [sorted, setSorted] = useState(null)
    const [search, setSearch] = useState("")

    async function getAll() {
        const data = await fetch("http://localhost:3400/")
        const res = await data.json()
        setProduct(res)
    }

    useEffect(() => {
        getAll()
    }, [])



    function handleSubmit(item) {
        fetch("http://localhost:3400/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        getAll()
    }

    function handleSort(property, asc) {
        setSorted({ property, asc })
    }

    async function handleDelete(id) {
        await fetch(`http://localhost:3400/${id}`, { method: 'DELETE' })
        await getAll()
    }


    return (
        <div>
            <div id="add">
                <Formik
                    initialValues={{ image: '', name: '', ingridient: '', price: 0 }}
                    validationSchema={Yup.object({
                        image: Yup.string()
                            .required('Required'),
                        name: Yup.string()
                            .required('Required'),
                        ingridient: Yup.string()
                            .required('Required'),
                        price: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            handleSubmit(values)
                            setSubmitting(false);
                            resetForm()
                        }, 400);
                    }}
                >
                    <Form>
                        <label htmlFor="image"><p>Image Url</p></label>
                        <Field name="image" type="text" />
                        <ErrorMessage name="image" />

                        <label htmlFor="name"><p> Name</p></label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />

                        <label htmlFor="ingridient"><p>Ingridients</p></label>
                        <Field name="ingridient" type="text" />
                        <ErrorMessage name="ingridient" />


                        <label htmlFor="price"><p>Price</p></label>
                        <Field name="price" type="text" />
                        <ErrorMessage name="price" />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

                <div className="functions">
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
                    <button onClick={() => handleSort("name", true)}>A-z</button>
                    <button onClick={() => handleSort("name", false)}>Z-a</button>
                    <button onClick={() => handleSort("price", true)}>Price(low to high)</button>
                    <button onClick={() => handleSort("price", false)}>Price(high to low)</button>
                    <button onClick={() => setSorted(null)}>Default</button>
                </div>

                <table id="customers">
                    <tr>
                        <th>Image</th>
                        <th>Name & Ingridient</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                    {
                        product
                        .filter((x)=> x.name.toLowerCase().includes(search.toLocaleLowerCase()))
                            .sort((a, b) => {
                                if (sorted && sorted.asc) {
                                    return (a[sorted.property] > b[sorted.property]) ? 1 : ((b[sorted.property] > a[sorted.property]) ? -1 : 0)
                                }
                                else if (sorted && sorted.asc === false) {
                                    return (a[sorted.property] < b[sorted.property]) ? 1 : ((b[sorted.property] < a[sorted.property]) ? -1 : 0)
                                }
                                else {
                                    return 0
                                }
                            })
                            .map(x => (

                                <tr key={x._id}>
                                    <td><img src={x.image} alt="" /></td>
                                    <td>{x.name} & {x.ingridient}</td>
                                    <td>{x.price}</td>
                                    <td><button onClick={() => handleDelete(x._id)}>Delete</button></td>
                                </tr>


                            ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Addpage