<template>
  <div id="grid-container">
    <!--     <div id="hero-header"> -->
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
    <!--    </div> -->
  </div>
  <div id="contact-container">
    <div id="contact-field">
      <h2>Contact us</h2>
      <img id="cloudifyLogo" src="../assets/CloudifyLogo.png" alt="" />
      <h3>Phone:</h3>
      <h4>123-456-789</h4>
      <h3>Email: cloudify@cloudify.com</h3>
      <h3>Address:</h3>
      <h4>Cloud St 15, New York</h4>
    </div>
  </div>
</template>

<style scoped>
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* #grid-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}
 */
#grid-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr;
}

#about-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3vh;
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
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
}

#contact-field {
  margin-top: 40px;
  text-align: center;
  background-color: #d4f0fd;
  /*background-image: linear-gradient(to bottom right, #337891, #b5e6fa); */
  background: linear-gradient(to bottom left, #b5e6fa 50%, #a0d2e4 50%);
  width: 100%;
  margin-left: 8vw;
  margin-right: 5vw;
}

#cloudifyLogo {
  height: 60px;
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
