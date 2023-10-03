app.component("product-display", {
  template:
    /*html*/
    `<div class="product-display">
  <div class="product-container">
    <div class="product-image">
      /* Image */
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inventory >= 10">In Stock</p>
      <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
      <p v-else>Out of Stock</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
        class="color-circle" :style="{ backgroundColor: variant.color }">
      </div>
      /* Add to Cart Button */
      <button class="button" :disabled="!inventory" :class="{disabledButton: !inventory}" v-on:click="addToCart">Add
        to Cart</button>
      <button class="button" :disabled="!inventory" :class="{disabledButton: !inventory}"
        v-on:click="removeFromCart">Remove</button>
    </div>
  </div>
</div>`,
  data() {
    return {
      product: 'Socks',
      brand: "Hoodad's",
      selectedVariant: 0,
      details: ["50% Cotton", "30% Wool", "20% Polyester"],
      variants: [
        { id: 2234, color: "green", image: "images/socks_green.jpg", quantity: 50 },
        { id: 2235, color: "blue", image: "images/socks_blue.jpg", quantity: 0 }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity
    }
  }
})