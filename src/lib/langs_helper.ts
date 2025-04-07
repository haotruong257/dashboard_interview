export function lang_Vietnamese(text: string) {
  switch (text) {
    case "top_rate_product":
      return { text: "Top sản phẩm sản xuất nhiều nhất" };
    case "top_rate_product_by_group":
      return { text: "Tiến Độ Sản Xuất Theo Nhóm" };
    default:
      return { text: "" };
  }
}

export function lang_Eng(text: string) {
  switch (text) {
    case "top_rate_product":
      return { text: "Top Rate Product" };
    case "top_rate_product_by_group":
      return { text: "Top Rate Product By Group" };
    default:
      return { text: "" };
  }
}
