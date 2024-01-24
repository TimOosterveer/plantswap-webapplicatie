<script>
  export let data
  console.log(data)
</script>

<header>
  <div>
    <!-- <img src={data.kastHeaders[0].image.url} alt=""> -->
    <img src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
  </div>

  <h1>Contact</h1>
</header>

<style>

  header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
  }
  
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  header::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.117);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  h1 {
    color: white;
    font-size: 6vw;
    z-index: 2;
    view-transition-name: h1;
  }
  </style>