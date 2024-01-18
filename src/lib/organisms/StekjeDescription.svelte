<script>
	export let data;
	import VectorPlant from "$lib/assets/vectorplant.svg";
  </script>
  
  <section class="container">
	<div class="stekje-container">
	  <img id="one" src={VectorPlant} alt="incon plant" />
	  <div class="left">
		<div class="beschrijving-tag">
		  <svg
			width="25"
			height="25"
			viewBox="0 0 23 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path
			  d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
			  fill="#F26F21"
			/>
		  </svg>
		  <h2>Beschrijving</h2>
		</div>
		<p>{data.stekje.beschrijving}</p>
	  </div>
	  <div class="right">
		<details>
		  <summary>Landherkomst</summary>
		  <div class="content">
			<p>{data.stekje.landvanherkomst}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Voeding</summary>
		  <div class="content">
			<p>{data.stekje.voeding}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Temperatuur</summary>
		  <div class="content">
			<p>{data.stekje.temperatuur}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Giftig</summary>
		  <div class="content">
			<p>{data.stekje.giftig}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Verpotten</summary>
		  <div class="content">
			<p>{data.stekje.verpotten}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Watergeven</summary>
		  <div class="content">
			<p>{data.stekje.watergeven}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Zonlicht</summary>
		  <div class="content">
			<p>{data.stekje.zonlicht}</p>
		  </div>
		</details>
  
		<details>
		  <summary>Stekken</summary>
		  <div class="content">
			<p>{data.stekje.stekken}</p>
		  </div>
		</details>
	  </div>
	</div>
  </section>
  
  <style>
	section {
	  position: relative;
	  width: 100%;
	  background-color: var(--background-color);
	}
  
	h2 {
	  color: var(--background-color);
	  font-size: 35px;
	}
  
	.left p {
	  font-size: 1.2em;
	  margin-top: 15px;
	}
	.container {
	  padding: 2rem;
	}
  
	.stekje-container {
	  position: relative;
	  background-color: #f9e9c2;
	  width: 100%;
	  border-radius: var(--bradius);
	  display: flex;
	  padding: 2rem;
	  justify-content: space-between;
	}
  
	.left {
	  position: sticky;
	  top: 1rem;
	  width: 50%;
	  height: 89vh;
	  padding-right: 5%;
	  overflow: hidden;
	}
  
	.beschrijving-tag {
	  display: flex;
	  align-items: center;
	}
  
	.beschrijving-tag svg {
	  margin-right: 10px;
	}
  
	#one {
	  position: absolute;
	  bottom: 0;
	  left: 5rem;
	  width: 350px;
	  height: 350px;
	}
	.right {
	  width: 50%;
	  padding: 0;
	}
  
	/* Algemene stijl voor details en summary */
	details {
	  width: 100%;
	  border-radius: var(--bradius);
	  margin-bottom: 10px;
	}
  
	summary::before {
	  content: "+";
	  color: black;
	  font-size: 25px;
	  margin-right: 5px;
	  margin-bottom: 5px;
	}
  
	/* details:hover {
	  background-color: #f5c275;
	} */
	/* Stijl voor details[open] om de summary::before aan te passen */
	details[open] summary::before {
	  content: "-";
	}
  
  
	summary {
	  background-color: #fbc980;  
	  transition: background-color 0.3s;
	  border-radius: 10px 0 10px 0;
	  display: flex;
	  align-items: center;
	  color: var(--background-color);
	  text-transform: uppercase;
	  font-weight: 600;
	  padding: 15px;
	  cursor: pointer;
	}
 
	details[open] summary {
		border-radius: 10px 0 0 0;
	}
  
	summary:hover {
	  background-color: #f5c275 ; 
	}
  
	/* Stijl voor geopende details */
	details[open] .content {
	  max-height: 500px; /* Aanpassen aan je eigen behoeften */
	  border-radius: 0 0 10px 0;
	  padding: 12px;
	  background-color: #fbc980;
	}
  
	@media screen and (max-width: 768px) {
	  .stekje-container {
		display: grid;
		align-content: space-evenly;
	  }
  
	  .left,
	  .right {
		position: static;
		height: fit-content;
		width: 100%;
	  }

	  h2{
		font-size: 30px;
	  }
  
	  #one {
		display: none;
	  }
  
	  details {
		margin-top: 20px;
	  }
	}
  </style>