<template>
    <div id="sub">
        <div class="container">
            <div class="sub-text">
                <h4 class="sub-text-h4">Personally Newsletter</h4>
                <p class="sub-text-p">A bi-weekly newsletter of design inspiration, resources and anything related to career development.</p>
            </div>
            <div class="input-sub">
                <form @click.prevent="">
                    <input type="email" name="" id="" placeholder="Email address">
                    <button type="submit" class="btn-sub">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 60px;
}
.sub-text-h4 {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    line-height: 130%; 
    background: linear-gradient(45deg, #C41740,  33%, #EA9C28 66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.sub-text-p {
    margin: 0;
    margin-top: 10px;
    color: #475467;
    text-align: center;
    font-size: 18px;
    line-height: 28px; 
}
form {
  position: relative;
  margin-top: 32px;
  margin-bottom: 62px;
}
input {
    display: block;
    margin: 0 auto;
    width: 400px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    padding: 0 1.5em;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px; 
}

.btn-sub {
  position: absolute;
  top: 0;
  right: 50px;
  height: 50px;
  border-radius: 0px 8px 8px 0px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: #1D2939;
  padding: 15px 34px; 
  text-align: center;
  cursor: pointer;
  transition: 0.3s all;
}
.btn-sub:hover {
    background-color: #0a0d11;
}
</style>