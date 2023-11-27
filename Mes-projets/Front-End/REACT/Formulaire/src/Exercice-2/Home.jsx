import { useRef } from "react";

// On lie une reference à un element HTML

export const Home = () => {
  // notreReference fait référence qui permet la manipulation d'un un élément HTML
  const notreReference = useRef();

  const handleClick = (e) => {
    console.log(notreReference);

    // Donne le focus à l'input:
    notreReference.current.focus();

    // Ecrit COUCOU à l'élément input
    notreReference.current.value = "COUCOU";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* ici, je donne ma ref que je veux utiliser sur l'input */}
        <input required minLength={8} type={"text"} ref={notreReference} />
        <button onClick={handleClick}>Envoyer "COUCOU"</button>
      </form>
    </>
  );
};
