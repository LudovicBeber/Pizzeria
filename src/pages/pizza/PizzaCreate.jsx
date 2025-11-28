import BackButton from '../../components/navigation/BackButton';
import Input from '../../components/form/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../stores/app.store';
import { apiService } from '../../main';

const PizzaCreate = () => {

  const navigate = useNavigate();
  const { setAccessToken } = useAppStore();

  const [data, setData] = useState({
    title: "",
    ingredients: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    price: "",
    request: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      title: "",
      ingredients: "",
      price: "",
      request: "",
    });

    const newErrors = {};

    if (!data.title) {
      newErrors.title = "Le titre n'est pas valide";
    }

    if (!data.ingredients) {
      newErrors.ingredients = "La liste des ingredients n'est pas valide";
    }

    if (!data.price) {
      newErrors.price = "Le prix de la pizza n'est pas valide";
    }

    if (newErrors.title || newErrors.ingredients || newErrors.price) {
      setErrors(newErrors);
      return;
    }

    apiService.pizzas
      .create(data)
      .then((res) => {
        if (res.error) {
          setErrors((prev) => ({ ...prev, request: res.message }));
          return;
        }

        localStorage.setItem("accessToken", res.data.accessToken);
        setAccessToken(res.data.accessToken);
        navigate("/pizzas", { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className='p-5'>

      <h1 className='text-2xl mb-4'>
          Créer une pizza
      </h1>
      <BackButton />
        <form className='p-5' onSubmit={handleSubmit}>
          <Input
            id={"title"}
            type={"text"}
            label={"Titre"}
            onChange={handleChange}
            value={data.title}
            placeholder={"Entrez le titre de la pizza"}
            errorMessage={errors?.title || ""}
          />
          <Input
            id={"ingredients"}
            type={"text"}
            label={"Ingrédients"}
            onChange={handleChange}
            value={data.ingredients}
            placeholder={"Entrez les ingrédients de la pizza"}
            errorMessage={errors?.ingredients || ""}
          />
          <Input
            id={"price"}
            type={"text"}
            label={"Prix"}
            onChange={handleChange}
            value={data.price}
            placeholder={"Entrez le prix de la pizza"}
            errorMessage={errors?.price || ""}
          />
          {errors?.request && (
            <p className="mt-4 text-lg !text-red-600 text-center">
              {errors?.request}
            </p>
          )}
          <button
            type={"submit"}
            className={`px-4 py-2 font-bold bg-blue-600 rounded-md mt-4 text-white hover:bg-blue-800 hover:cursor-pointer`}
          >
            Créer la pizza
          </button>
        </form>
    </div>
    )
}

export default PizzaCreate;