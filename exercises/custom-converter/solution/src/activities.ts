import * as activity from '@temporalio/activity';
import { ApplicationFailure } from '@temporalio/activity';

export async function converterActivity(input: string): Promise<string> {
  const context = activity.Context.current();
  context.log.info('User is successfully logged', { input });
  // throw ApplicationFailure.create({ nonRetryable: true, message: `Activity failed:` })
  return `Received ${input}`;
}
