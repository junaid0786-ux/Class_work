import React from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  console.log(CountryData);

  return (
    <>
      <main className="box w-full h-1/2 mt-5  flex items-center  justify-center text-black text-xl font-bold ">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Currency Converter</h2>

          <div className=" flex items-center justify-center pb-3 w-100 gap-2">
            <select
              name="currency"
              id="currency"
              className="mt-4 p-2 rounded text-black border"
            >
              <option value="">--select--</option>
              {CountryData.map((country) => (
                <option key={country.iso2} value={country.iso2}>
                  {country.countryName}
                </option>
              ))}
            </select>
            <select
              name="country"
              id="country"
              className="mt-4 p-2 rounded text-black border"
            >
              <option value="">--select--</option>
            </select>
          </div>
        </div>
      </main>
    </>
  );
};

export default Currency;
