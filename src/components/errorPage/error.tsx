import React from "react";
import { useRouteError, Link } from "react-router-dom";

// Définir un type pour les erreurs attendues
interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError; // Type assertion pour que TypeScript sache que c'est un RouteError
  console.error(error);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <span>Retour à la page d'accueil</span>
      </Link>
    </div>
  );
};

export default ErrorPage;
