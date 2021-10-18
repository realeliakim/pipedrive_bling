function getXml(deal) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <pedido>
        <cliente>
            <nome>${deal.person_id.name}</nome>
            <fone>(84) 98803-2613</fone>
            <endereco>Rua Presidente Médice</endereco>
            <numero>125</numero>
            <bairro>Jocelyn Villar</bairro>
            <cep>59.800.000</cep>
            <cidade>Martins</cidade>
            <uf>RN</uf>
        </cliente>
        <transporte>
          <transportadora>Transportadora Teste</transportadora>
          <tipo_frete>R</tipo_frete>
          <servico_correios>SEDEX - CONTRATO</servico_correios>
        </transporte>
        <itens>
          <item>
            <codigo>001</codigo>
            <descricao>Computador</descricao>
            <un>Un</un>
            <qtde>1</qtde>
            <vlr_unit>${deal.value ? deal.value : 0}</vlr_unit>
          </item>
        </itens>
        <vlr_frete>0</vlr_frete>
        <vlr_desconto>0</vlr_desconto>
        <obs>Sem observações</obs>
        <obs_internas>Sem observações internas</obs_internas>
      </pedido>`;
  return xml;
}

export default getXml;
