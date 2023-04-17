import useAxios from "axios-hooks";

export function useAddress(cep) {
  const [{ data: address }] = useAxios(`https://viacep.com.br/ws/${cep}/json/`);

  return { address };
}
