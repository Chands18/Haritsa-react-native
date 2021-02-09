export function FormatCurrency({num = 0, currency = 'Rp.'}) {
    return (
      currency + ' ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  }