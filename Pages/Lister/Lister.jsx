import React from "react";
import "./Lister.css"
import { Link } from "react-router-dom";
function Lister(){
    return(
    <form id="f1">
        <fieldset><legend>Lister</legend>
        <div>
        <label for="pet-type">Vous voulez lister un chien, un chat ou un autre animal de compagnie ?</label>
        <select name="pet-type" id="pet-type">
            <option value="dog">Chien</option>
            <option value="cat">Chat</option>
            <option value="other">Autre</option>
        </select>
        </div>
        <label for="bonded-pair">Souhaitez-vous lister un animal?</label>
        <input type="checkbox" name="bonded-pair" id="bonded-pair"></input>

        <p>Si vous listez un animal, veuillez sélectionner les options déroulantes ci-dessous concernant votre plus jeune animal de compagnie et, dans la description, fournir tous les détails sur les animaux.</p>

        <label for="spayed-neutered">Votre animal est-il stérilisé ou stérilisé ?</label>
        <select name="spayed-neutered" id="spayed-neutered">
            <option value="yes">Oui</option>
            <option value="no">Non</option>
        </select>

        <label >Pourquoi devez-vous lister votre animal de compagnie ?</label>
        <select name="rehoming-reason" id="rehoming-reason">
        <option value="">Problèmes de comportement</option>
            <option value="">Horaire chargé</option>
            <option value="">Problèmes de santé humaine</option>
            <option value="">Des jeunes enfants ou grossesse</option>
            <option value="">Coûts permanents</option>
            </select>

        <label >Combien de temps pouvez-vous garder votre animal de compagnie pendant que nous vous aidons à trouver un nouveau foyer convenable ?</label>
        <select>
        <option>Moins d'une semaine </option>
        <option>Plus d'une semaine </option>
        <option>Moins de 1 mois</option>
        <option>1 moins </option>
        <option>Plus de 2 moins </option>
        </select>
        
        <Link to="/Lister2">
        <button type="submit">Suivant</button></Link>
        </fieldset></form>

    )}
export default Lister;