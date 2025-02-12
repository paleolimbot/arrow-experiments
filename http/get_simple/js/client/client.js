// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

const Arrow = require('apache-arrow');

const url = 'http://localhost:8000';

async function runExample(url) {
  const startTime = new Date();
  
  const table = await Arrow.tableFromIPC(fetch(url));
  
  const duration = (new Date() - startTime) / 1000;
  console.log(`${table.batches.length} record batches received`);
  console.log(`${duration.toFixed(2)} seconds elapsed`);
}

runExample(url);
