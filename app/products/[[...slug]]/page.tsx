import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { SortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { SortOrder },
}: Props) => {
  return (
    <div>
      <h2>
        Product Page {slug} {SortOrder}
      </h2>
    </div>
  );
};

export default ProductPage;
