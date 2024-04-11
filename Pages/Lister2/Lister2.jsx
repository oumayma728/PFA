    import React from "react";
    import "./Lister2.css"
    function Lister2(){
        return(
            <div>
                <div>
        <form id="f2">
            <fieldset><legend>Caractéristiques</legend>
            <div className="form-group1">
            <label for="petName">Le nom de l'animal de compagnie</label>
            <input type="text" id="petName" name="petName" required/>
            <div className="form-group2">
            <label for="age">Age (years)*</label>
            <input type="number" id="age" name="age" required/>
            <p>Si votre animal est un chiot, ajoutez son âge à 0.</p>
            </div>
        </div>
        <div class="f3">
            <label for="size">Size</label>
            <select id="size" name="size">
            <option value="">Rien de sélectionné</option>
            <option value="small">Petit</option>
            <option value="medium">Moyen</option>
            <option value="large">Grand</option>
            <option value="giant">Géant</option>
            </select>
        </div>
        <div class="f3">
            <label for="sex">Sex</label>
            <select id="sex" name="sex">
            <option value="">Rien de sélectionné</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
        </div>
        <div class="f3">
            <label for="breed">Race</label>
            <select id="breed" name="breed" >
            <option value="">All</option>
            <option value="breed1">Race 1</option>
            <option value="breed2">Race 2</option>
            <option value="breed3">Race 3</option>
            </select>
            </div>
        <button type="submit">Submit</button>
        </fieldset>
</form>
</div>

                </div>
        )}
    export default Lister2;