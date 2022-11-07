import React, { useEffect, useState } from "react";
import styles from "./AddressForm.module.css";

const AddressForm = ({ placesKey, inputId, setAddress, required }) => {
  //input state
  const [input, setInput] = useState("");
  const [addressName, setAddressName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postCode, setPostCode] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");

  //functionally clear all state
  const clear = (e) => {
    if (e) e.preventDefault();
    setInput("");
    setAddressName("");
    setStreet("");
    setCity("");
    setCountry("");
    setProvince("");
    setPostCode("");
    setFormattedAddress("");
  };

  //on mount, load google auto complete
  useEffect(() => {
    const renderGoogle = () => {
      window[inputId] = new window.google.maps.places.Autocomplete(
        document.getElementById(inputId),
        {}
      );
      const handlePlaceSelect = () => {
        const place = window[inputId].getPlace();
        clear();
        setFormattedAddress(place.formatted_address);
        for (const component of place.address_components) {
          const type = component.types[0];
          switch (type) {
            case "street_number":
              setAddressName(component.long_name);
              break;
            case "premise":
              addressName === ""
                ? setAddressName(component.long_name)
                : setAddressName(component.long_name + ", " + addressName);
              break;
            case "route":
              setStreet(component.long_name);
              break;
            case "administrative_area_level_1":
              setCity(component.long_name);
              break;
            case "administrative_area_level_2":
              setProvince(component.long_name);
              break;
            case "neighborhood":
              if (city === "") setCity(component.long_name);
              break;
            case "country":
              setCountry(component.long_name);
              break;
            case "postal_code":
              setPostCode(component.long_name);
              break;
            default:
              console.log("irrelevant component type");
              break;
          }
        }
      };

      //listen for place change in input field
      window[inputId].addListener("place_changed", handlePlaceSelect);
    };

    //if places script is already found then listen for load and then renderGoogle
    let found = document.getElementById("placesScript") ? true : false;
    if (!found) {
      const script = document.createElement("script");
      script.id = "placesScript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        placesKey +
        "&libraries=places";
      script.async = true;
      script.onload = () => renderGoogle();
      document.body.appendChild(script);
    }
    if (found) {
      document
        .getElementById("placesScript")
        .addEventListener("load", renderGoogle);
    }
  }, [placesKey, inputId, addressName, city]);

  //return address object to parent for your use case
  useEffect(() => {
    const addressObject = {
      formattedAddress: formattedAddress,
      addressName: addressName,
      street: street,
      city: city,
      province: province,
      country: country,
      postCode: postCode,
    };
    setAddress(addressObject);
  }, [
    formattedAddress,
    addressName,
    street,
    city,
    province,
    country,
    postCode,
    setAddress,
  ]);

  //listen for mobile screen size
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const screenSize = (e) => {
      const w = e.target.innerWidth;
      w < 600 ? setMobile(true) : setMobile(false);
    };
    window.addEventListener("resize", screenSize);
  }, []);

  return (
    <div className={styles.AddressContainer}>
      <div className={styles.inputAreaContainer}>
        <div className={styles.inputArea}>
          <p>Address Search : </p>
          <input
            className={styles.inputAddressLine}
            type="text"
            placeholder="Enter a location"
            id={inputId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
      </div>

      <div className={styles.inputAreaContainer}>
        <div className={styles.inputArea}>
          <p>Country : </p>
          <input
            className={styles.inputCountry}
            type="text"
            id="country"
            value={country || ""}
            onChange={(e) => setCountry(e.target.value)}
            required={required && required}
          ></input>
        </div>

        <div className={styles.inputArea}>
          <p>City : </p>
          <input
            className={styles.inputCity}
            type="text"
            id="city"
            value={city || ""}
            onChange={(e) => setCity(e.target.value)}
            required={required && required}
          ></input>
        </div>
      </div>

      <div className={styles.inputAreaContainer}>
        <div className={styles.inputArea}>
          <p>Province : </p>
          <input
            className={styles.inputProvince}
            type="text"
            id="province"
            value={province || ""}
            onChange={(e) => setProvince(e.target.value)}
            required={required && required}
          ></input>
        </div>

        <div className={styles.inputArea}>
          <p>Street : </p>
          <input
            className={styles.inputStreet}
            type="text"
            id="street"
            value={street || ""}
            onChange={(e) => setStreet(e.target.value)}
          ></input>
        </div>
      </div>

      <div className={styles.inputAreaContainer}>
        <div className={styles.inputArea}>
          <p>Post Code : </p>
          <input
            className={styles.inputPostCode}
            type="text"
            id="postCode"
            value={postCode || ""}
            onChange={(e) => setPostCode(e.target.value)}
            required={required && required}
          ></input>
        </div>

        <div className={styles.inputArea}>
          <p>Number : </p>
          <input
            className={styles.inputNumber}
            type="text"
            id="addressName"
            value={addressName || ""}
            onChange={(e) => setAddressName(e.target.value)}
            required={required && required}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
