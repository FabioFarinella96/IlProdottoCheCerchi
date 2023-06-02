import CookieConsent from "react-cookie-consent";

const CookieAccept = () => {
  return (
    <CookieConsent
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          alert("Accept was triggered by user scrolling");
        } else {
          null;
        }
      }}
      debug={true}
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accetta i cookie"
      cookieName="YourCoockieName"
      style={{ background: "#02cf87" }}
      buttonStyle={{
        color: "#000",
        fontSize: "15px",
      }}
      declineButtonStyle={{
        margin: "10px 10px 10px 0",
      }}
      expires={450}
    >
      Questo sito web usa i cookies
    </CookieConsent>
  );
};

export default CookieAccept;
