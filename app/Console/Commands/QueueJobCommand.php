<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use function Termwind\ask;

class QueueJobCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue:job';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This is for start queue work in production';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        logger('working...');
    }
}
