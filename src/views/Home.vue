<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are {{ invoiceData.length }} total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span
            >Filter by status <span v-if="filteredInvoice">: {{ filteredInvoice }}</span></span
          >
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li @click="filteredInvoices">Draft</li>
            <li @click="filteredInvoices">Pending</li>
            <li @click="filteredInvoices">Paid</li>
            <li @click="filteredInvoices">Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <!-- Invoices -->
    <div v-if="invoiceData.length > 0">
      <Invoice v-for="(invoice, index) in filteredData" :invoice="invoice" :key="index" />
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt="" />
      <h3>There is nothing here</h3>
      <p>Create a new invoice by clicking the New Invoice button and get started</p>
    </div>
  </div>
</template>

<script>
import Invoice from "../components/Invoice";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
      filteredInvoice: null,
    };
  },
  components: {
    Invoice,
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },

    filteredInvoices(e) {
      if (e.target.innerText === "Clear Filter") {
        this.filteredInvoice = null;
        return;
      }
      this.filteredInvoice = e.target.innerText;
    },
  },
  computed: {
    ...mapState(["invoiceData"]),

    filteredData() {
      return this.invoiceData.filter((invoice) => {
        if (this.filteredInvoice === "Draft") {
          return invoice.invoiceDraft === true;
        }
        if (this.filteredInvoice === "Pending") {
          return invoice.invoicePending === true;
        }
        if (this.filteredInvoice === "Paid") {
          return invoice.invoicePaid === true;
        }
        return invoice;
      });
    },
  },
};
</script>

<style src="../styles/Home.scss" lang="scss" scoped></style>
