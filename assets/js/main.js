const EXCHANGE_RATES = {
  USD: 0.0091,
  GBP: 0.0071,
  MYR: 0.036,
};

const currencyFormatters = {
  USD: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  GBP: new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  MYR: new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
};

document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.querySelector("#bdtAmount");
  const clearButton = document.querySelector("#clearButton");
  const outputNodes = Array.from(document.querySelectorAll("[data-currency]"));

  const resetValues = () => {
    outputNodes.forEach((node) => {
      node.textContent = "--";
    });
  };

  const updateValues = (amount) => {
    outputNodes.forEach((node) => {
      const currency = node.dataset.currency;
      const rate = EXCHANGE_RATES[currency];
      const formatter = currencyFormatters[currency];

      if (!rate || !formatter) {
        node.textContent = "--";
        return;
      }

      const convertedAmount = amount * rate;
      node.textContent = formatter.format(convertedAmount);
    });
  };

  const handleInput = () => {
    const rawValue = amountInput.value.trim();

    if (!rawValue) {
      resetValues();
      return;
    }

    const numericValue = Number(rawValue);

    if (Number.isNaN(numericValue)) {
      resetValues();
      return;
    }

    const positiveValue = Math.max(0, numericValue);

    if (positiveValue !== numericValue) {
      amountInput.value = positiveValue;
    }

    updateValues(positiveValue);
  };

  const clearInput = () => {
    amountInput.value = "";
    resetValues();
    amountInput.focus();
  };

  amountInput.addEventListener("input", handleInput);
  clearButton.addEventListener("click", clearInput);

  resetValues();
});
