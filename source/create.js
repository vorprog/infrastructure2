require('./iam/create_users');
require('./iam/create_groups');

require('./network/create_vpcs');
require('./network/create_subnets');
require('./network/create_transit_gateway');
require('./network/create_private_networks');
require('./network/create_public_networks');

require('./storage/create_keys');
require('./storage/create_buckets');

require('./compute/create_clusters');
require('./iam/create_cluster_admin_role');
require('./compute/create_cluster_roles');
