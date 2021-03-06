import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // ele existe? nop. -> erro.
    // ele existe? yep. -> ok!
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction doesnt exist');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
