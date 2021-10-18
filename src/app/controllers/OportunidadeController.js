import axios from 'axios';
import api from '../../services/pipeService';
import OrderSchema from '../schemas/OrderSchema';
import getXml from '../helpers/OrderHelpers';

class OpportunityController {
  async index(req, res) {
    const pedidos = await OrderSchema.find().sort('createdAt').limit(20);

    return res.json(pedidos);
  }

  async store(req, res) {
    const orders = [];

    const pipedrive = await api.getOpportunities();

    const url = process.env.BLING_URL;
    const key = process.env.BLING_KEY;

    pipedrive.map((deal) => {
      const xml = getXml(deal);

      axios
        .post(`${url}/pedido/?apikey=${key}&xml=${encodeURI(xml)}`)
        .then((response) => {
          console.log(response.data);
        });

      orders.push({
        id: deal.id,
        orderDay: deal.add_time.substr(0, 10),
        title: deal.title,
        personName: deal.person_id.name ? deal.person_id.name : '',
        organization: deal.org_id ? deal.org_id.name : '',
        currency: deal.currency,
        status: deal.status,
        value: deal.value,
      });
    });

    const save = await api.saveOpportunities(orders);

    return res.json({ status: save });
  }
}

export default new OpportunityController();
