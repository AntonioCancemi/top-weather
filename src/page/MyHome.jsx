import { useEffect } from "react";
import { Row, Form, Col } from "react-bootstrap";
import CityList from "../components/CityList";
import { useDispatch, useSelector } from "react-redux";
import { getPosition } from "../redux/middleware/getPosition";
import { setCountry, setKeyword } from "../redux/action/searchAtion";
const apiKey = "8cdafc0e1a99c13d56957f350ac92768";
const MyHome = () => {
  const countryCodes = [
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BQ",
    "BA",
    "BW",
    "BV",
    "BR",
    "IO",
    "BN",
    "BG",
    "BF",
    "BI",
    "CV",
    "KH",
    "CM",
    "CA",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CD",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CW",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "ET",
    "FK",
    "FO",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "TF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GG",
    "GN",
    "GW",
    "GY",
    "HT",
    "HM",
    "VA",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IM",
    "IL",
    "IT",
    "JM",
    "JP",
    "JE",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MK",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "MP",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "BL",
    "SH",
    "KN",
    "LC",
    "MF",
    "PM",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SX",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "GS",
    "SS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SJ",
    "SZ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UM",
    "UY",
    "UZ",
    "VU",
    "VE",
    "VN",
    "VG",
    "VI",
    "WF",
    "EH",
    "YE",
    "ZM",
    "ZW",
  ];

  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.keyword);
  const country = useSelector((state) => state.search.country);
  const { data, loading, error } = useSelector((state) => state.position);

  useEffect(() => {
    if ((keyword !== "") & (country !== "")) {
      dispatch(getPosition(keyword, country, apiKey));
    }
  }, [keyword]);

  return (
    <>
      <Row className="justify-content-center py-5 heroSearch-home">
        <Col xs={12} className="d-flex justify-content-center pb-4 ">
          <form>
            <div className="">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="search"
                placeholder="inserisci una qualsiasi lettera o parola per effetuare una ricerca"
                value={keyword}
                onChange={(e) => {
                  dispatch(setKeyword(e.target.value));
                }}
              />
            </div>

            <div>
              <Form.Label>Seleziona un paese:</Form.Label>
              <Form.Control
                as="select"
                value={country}
                onChange={(e) => dispatch(setCountry(e.target.value))}
                size="10"
              >
                <option value={country}>{country}</option>
                {countryCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </Form.Control>
            </div>
          </form>
        </Col>
      </Row>
      <br />

      <Row className="justify-content-center d-flex text-dark align-content-center ">
        {keyword != "" ? data ? <CityList cities={data} /> : <></> : <></>}
      </Row>
    </>
  );
};
export default MyHome;
