import axios from 'axios';
import OrderSchema from '../app/schemas/OrderSchema';

class OrderService {
  async getOpportunities(req, res) {
    const api = await axios.get(
      `${process.env.PIPEDRIVE_URL}/deals?status=won&api_token=${process.env.PIPEDRIVE_KEY}`
    );

    return api.data.data;
  }

  async saveOpportunities(req, res) {
    req.map((deals) => {
      OrderSchema.create({
        _id: deals.id,
        orderDay: deals.orderDay,
        title: deals.title,
        personName: deals.personName,
        organization: deals.organization,
        status: deals.status,
        value: deals.value,
        currency: deals.currency,
      });
    });

    return 'Pedido salvo com sucesso';
  }
}

export default new OrderService();
