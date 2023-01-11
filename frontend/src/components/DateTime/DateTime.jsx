import "./style.scss";

export default function DateTime() {
  return (
    <>
      <div className="DateTime">
        <label>
          Départ
          <input type="time" />
        </label>
        <label>
          Arrivée
          <input type="time" />
        </label>
      </div>
      <div>
        <label className="listSilo">
          Choose your silo
          <select className="localisationInput" required>
            <option value="---">Localisation</option>
            <option value="Africa">Paris Nord: La vilette</option>
            <option value="Africa">Paris Ouest : Auteuil </option>
            <option value="America">Paris Est : Bastille</option>
            <option value="Asia">Paris Sud : Place d'Italie</option>
          </select>
        </label>
      </div>
      <div className="ButtonOk">
        <button type="submit" className="submit">
          OK
        </button>
      </div>
    </>
  );
}
