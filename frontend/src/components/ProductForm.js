import {Form, json, redirect, useActionData, useNavigate, useNavigation} from "react-router-dom";

export default function ProductForm({method, product}) {
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return(
      <Form method={method}>
          {data && data.errors && <ul>
              {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}
          </ul>}
          <p>
              <label htmlFor="title">Title</label>
              <input name="title" id="title" type="text" required defaultValue={product ? product.title : ''}/>
          </p>
          <p>
              <label htmlFor="image">Image</label>
              <input name="image" id="image" type="url" required defaultValue={product ? product.image : ''}/>
          </p>
          <p>
              <label htmlFor="date">Date</label>
              <input name="date" id="date" type="date" required defaultValue={product ? product.date : ''}/>
          </p>
          <p>
              <label htmlFor="description">Description</label>
              <textarea rows={5} name="description" id="description" required defaultValue={product ? product.description : ''}/>
          </p>
          <div>
              <button disabled={isSubmitting} type="button" onClick={cancelHandler}>Cancel</button>
              <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
          </div>
      </Form>
    );
}

export async function action({request, params}) {
    const method = request.method;
    const data = await request.formData();

    const productData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    let url = 'http://localhost:8080/events';

    if (method === "PATCH") {
        const productId = params.productId;
        url = "http://localhost:8080/events/" + productId;
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({message: 'could not save product'}, {status: 500})
    }

    return redirect('/about')
}