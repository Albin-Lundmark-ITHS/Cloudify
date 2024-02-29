<template>
  <div id="grid-container">
    <div id="about-us-container">
      <h1>Meet our team</h1>

      <img
        id="staff-image"
        src="https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-192555907.jpg"
        alt=""
      />
    </div>

    <div id="about-us-text">
      <h2>Text about</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam odio itaque
        quaerat iusto molestias corporis aspernatur fugit, corrupti, aliquid impedit temporibus modi
        fuga magnam nostrum, officiis nemo! Perferendis praesentium repudiandae adipisci repellendus
        eligendi voluptates impedit consectetur rem quae sed?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptas necessitatibus
        perferendis excepturi quidem assumenda ipsam accusamus, possimus, nihil consequatur
        praesentium voluptatibus aperiam dolore soluta animi omnis officia reiciendis. Maxime autem
        labore dolore exercitationem aliquid deserunt tempora alias maiores ex mollitia est
        laboriosam fugit quidem, a perferendis quaerat dolorum ea.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolor quasi, odio
        consequatur unde placeat, in quod neque provident temporibus accusantium blanditiis
        consequuntur! Eius, incidunt, inventore distinctio officiis adipisci, ducimus sed accusamus
        quia commodi obcaecati perferendis accusantium porro ipsam ipsum iure quos suscipit cumque
        quisquam?
      </p>
    </div>
  </div>

  <div id="contact-container">
    <div id="contact-field">
      <!-- <div id="contact-field-text">
      <h2>Contact us</h2>
      <img id="cloudifyLogo" src="../assets/img/CloudifyLogo.png" alt="" />
      <h3>Phone:</h3>
      <h4>123-456-789</h4>
      <h3>Email: cloudify@cloudify.com</h3>
      <h3>Address:</h3>
      <h4>Cloud St 15, New York</h4>
    </div> -->
      <div class="container">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h2>Contact us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident, iste
                error nihil vero atque nobis magni repudiandae? Animi, rem.
              </p>
              <img id="cloudifyLogo" src="../assets/img/CloudifyLogo.png" alt="" />

              <!--   <prepend-icon=""> -->
              <h3><v-icon class="footerIcon" icon="mdi-phone"></v-icon> 123-456-789</h3>
              <h3>
                <v-icon class="footerIcon" icon="mdi-email-outline"></v-icon>cloudify@cloudify.com
              </h3>
              <h3>
                <v-icon class="footerIcon" icon="mdi-map-marker"></v-icon>Cloud St 15, New York
              </h3>
            </div>
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <form action="#">
                <h2 class="lg-view">Let's Chat!</h2>
                <p>* Required</p>
                <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#grid-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1.5fr;
}

#about-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
}

#staff-image {
  height: 65vh;
  width: 950px;
}

#about-us-text {
  margin-top: 7vh;
  text-align: left;
  line-height: 25px;
  font-size: 18px;
  padding-right: 40px;
}

#contact-container {
  display: flex; /*
  justify-content: center; */
  margin-bottom: 5vh;
}

#contact-field {
  display: flex;
  justify-content: center;
  text-align: center; /*
  background-color: #d4f0fd;
  border: 1px solid rgba(0, 0, 0, 0.116); */
  width: 100%;
  margin: 40px 5vw 70px 5vw;
  padding-top: 4vh;
  padding-bottom: 5vh;
  /*  border: 4px ridge rgba(104, 125, 126, 0.575);
  box-shadow: 60px -16px teal; */
}

#contact-field-text {
  text-align: center;
}

#cloudifyLogo {
  height: 60px;
}

/* Form */


.mdi-phone {
  margin-right: 8px;
}

.container {
  background-color: rgb(153, 187, 197);
  display: flex;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 10px 5px;
  overflow: hidden;
  width: 768px;
  width: 70%;
  min-height: 550px;
  min-width: 370px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.form-container {
  display: flex;
}

.left-container {
  flex: 1;
  height: 650px;
}
.right-container {
  display: flex;
  flex: 1;
  height: 650px;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.left-container {
  display: flex;
  flex: 1; /* 
  height: 480px; */
  justify-content: center;
  align-items: center;
}

.left-container p {
  font-size: 0.9rem;
}

.left-inner-container {
  height: 50%;
  width: 100%;
  text-align: center;
  margin-top: 120px;
}
.right-inner-container {
  width: 70%;
  height: 80%;
  text-align: center;
}

input,
textarea {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px 0px inset;
  border-radius: 20px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 0.8rem;
}

input:focus,
textarea:focus {
  outline: 1px solid black;
}

button {
  border-radius: 20px;
  border: 1px solid #00b4cf;
  background-color: #00b4cf;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 600px) {
  .left-container {
    display: none;
  }
  .lg-view {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  .sm-view {
    display: none;
  }
}

form p {
  text-align: left;
}

/* Responsive layout adjustments */
@media screen and (min-width: 600px) {
  .col-25 {
    width: 25%; /* Adjust column width for larger screens */
    margin-left: 25px; /* Add some left margin for spacing */
  }
  .col-75 {
    width: 70%; /* Adjust column width for larger screens */
  }
  input[type='submit'] {
    width: auto; /* Adjust submit button width on larger screens */
    float: right; /* Align the submit button to the right */
  }
}

@media only screen and (max-width: 1400px) {
  #grid-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  #about-us-text {
    text-align: center;
    padding-left: 4vw;
    padding-right: 4vw;
  }

  #contact-field {
    margin-left: 0vw;
    margin-right: 0vw;
  }
}

@media only screen and (max-width: 768px) {
  #staff-image {
    height: 300px;
    width: 500px;
  }
}

@media only screen and (max-width: 480px) {
  #staff-image {
    height: 300px;
    width: 100%;
  }
}
</style>
