import type { INodeProperties } from 'n8n-workflow';

export const nodeBalancersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					]
				}
			},
			"options": [
				{
					"name": "Get Node Balancers",
					"value": "Get Node Balancers",
					"action": "NodeBalancers List",
					"description": "Returns a paginated list of NodeBalancers you have access to.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers"
						}
					}
				},
				{
					"name": "Create Node Balancer",
					"value": "Create Node Balancer",
					"action": "NodeBalancer Create",
					"description": "Creates a NodeBalancer in the requested Region.\n\nNodeBalancers require a port Config with at least one backend Node to start serving requests.\n\nWhen using the Linode CLI to create a NodeBalancer, first create a NodeBalancer without any Configs. Then, create Configs and Nodes for that NodeBalancer with the respective [Config Create](/docs/api/nodebalancers/#config-create) and [Node Create](/docs/api/nodebalancers/#node-create) commands.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodebalancers"
						}
					}
				},
				{
					"name": "Delete Node Balancer",
					"value": "Delete Node Balancer",
					"action": "NodeBalancer Delete",
					"description": "Deletes a NodeBalancer.\n\n**This is a destructive action and cannot be undone.**\n\nDeleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}"
						}
					}
				},
				{
					"name": "Get Node Balancer",
					"value": "Get Node Balancer",
					"action": "NodeBalancer View",
					"description": "Returns a single NodeBalancer you can access.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}"
						}
					}
				},
				{
					"name": "Update Node Balancer",
					"value": "Update Node Balancer",
					"action": "NodeBalancer Update",
					"description": "Updates information about a NodeBalancer you can access.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}"
						}
					}
				},
				{
					"name": "Get Node Balancer Configs",
					"value": "Get Node Balancer Configs",
					"action": "Configs List",
					"description": "Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.\n\nFor example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs"
						}
					}
				},
				{
					"name": "Create Node Balancer Config",
					"value": "Create Node Balancer Config",
					"action": "Config Create",
					"description": "Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs"
						}
					}
				},
				{
					"name": "Delete Node Balancer Config",
					"value": "Delete Node Balancer Config",
					"action": "Config Delete",
					"description": "Deletes the Config for a port of this NodeBalancer.\n\n**This cannot be undone.**\n\nOnce completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Get Node Balancer Config",
					"value": "Get Node Balancer Config",
					"action": "Config View",
					"description": "Returns configuration information for a single port of this NodeBalancer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Update Node Balancer Config",
					"value": "Update Node Balancer Config",
					"action": "Config Update",
					"description": "Updates the configuration for a single port on a NodeBalancer.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}"
						}
					}
				},
				{
					"name": "Get Node Balancer Config Nodes",
					"value": "Get Node Balancer Config Nodes",
					"action": "Nodes List",
					"description": "Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/nodes"
						}
					}
				},
				{
					"name": "Create Node Balancer Node",
					"value": "Create Node Balancer Node",
					"action": "Node Create",
					"description": "Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/nodes"
						}
					}
				},
				{
					"name": "Delete Node Balancer Config Node",
					"value": "Delete Node Balancer Config Node",
					"action": "Node Delete",
					"description": "Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.\n\nThis does not change or remove the Linode whose address was used in the creation of this Node.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Node Balancer Node",
					"value": "Get Node Balancer Node",
					"action": "Node View",
					"description": "Returns information about a single Node, a backend for this NodeBalancer's configured port.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Update Node Balancer Node",
					"value": "Update Node Balancer Node",
					"action": "Node Update",
					"description": "Updates information about a Node, a backend for this NodeBalancer's configured port.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Rebuild Node Balancer Config",
					"value": "Rebuild Node Balancer Config",
					"action": "Config Rebuild",
					"description": "Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.\n\nUse this command to update a NodeBalancer's Config and Nodes with a single request.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/configs/{{$parameter[\"configId\"]}}/rebuild"
						}
					}
				},
				{
					"name": "GET Nodebalancers Stats",
					"value": "GET Nodebalancers Stats",
					"action": "NodeBalancer Statistics View",
					"description": "Returns detailed statistics about the requested NodeBalancer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/nodebalancers/{{$parameter[\"nodeBalancerId\"]}}/stats"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /nodebalancers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancers"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancers"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancers"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancers"
					]
				}
			}
		},
		{
			"displayName": "POST /nodebalancers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Client Conn Throttle",
			"name": "client_conn_throttle",
			"type": "number",
			"default": 0,
			"description": "Throttle connections per second.  Set to 0 (zero) to disable throttling.\n",
			"routing": {
				"send": {
					"property": "client_conn_throttle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Configs",
			"name": "configs",
			"type": "json",
			"default": "[\n  {\n    \"algorithm\": \"roundrobin\",\n    \"check\": \"http_body\",\n    \"check_attempts\": 3,\n    \"check_body\": \"it works\",\n    \"check_interval\": 90,\n    \"check_passive\": true,\n    \"check_path\": \"/test\",\n    \"check_timeout\": 10,\n    \"cipher_suite\": \"recommended\",\n    \"nodes\": [\n      {\n        \"address\": \"192.168.210.120:80\",\n        \"config_id\": 4567,\n        \"id\": 54321,\n        \"label\": \"node54321\",\n        \"mode\": \"accept\",\n        \"nodebalancer_id\": 12345,\n        \"status\": \"UP\",\n        \"weight\": 50\n      }\n    ],\n    \"port\": 80,\n    \"protocol\": \"http\",\n    \"proxy_protocol\": \"none\",\n    \"ssl_cert\": \"<REDACTED>\",\n    \"ssl_key\": \"<REDACTED>\",\n    \"stickiness\": \"http_cookie\"\n  }\n]",
			"description": "The port Config(s) to create for this NodeBalancer.\n\nEach Config must have a unique port and at least one Node.\n",
			"routing": {
				"send": {
					"property": "configs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "balancer12345",
			"description": "This NodeBalancer's label. These must be unique on your Account.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The ID of the Region to create this NodeBalancer in.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /nodebalancers/{nodeBalancerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "PUT /nodebalancers/{nodeBalancerId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Client Conn Throttle",
			"name": "client_conn_throttle",
			"type": "number",
			"default": 0,
			"description": "Throttle connections per second.  Set to 0 (zero) to disable throttling.\n",
			"routing": {
				"send": {
					"property": "client_conn_throttle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "2018-01-01T00:01:01",
			"description": "When this NodeBalancer was created.\n",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Hostname",
			"name": "hostname",
			"type": "string",
			"default": "192.0.2.1.ip.linodeusercontent.com",
			"description": "This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.\n",
			"routing": {
				"send": {
					"property": "hostname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 12345,
			"description": "This NodeBalancer's unique ID.\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Ipv 4",
			"name": "ipv4",
			"type": "string",
			"default": "203.0.113.1",
			"description": "This NodeBalancer's public IPv4 address.\n",
			"routing": {
				"send": {
					"property": "ipv4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Ipv 6",
			"name": "ipv6",
			"type": "string",
			"default": null,
			"description": "This NodeBalancer's public IPv6 address.\n",
			"routing": {
				"send": {
					"property": "ipv6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "balancer12345",
			"description": "This NodeBalancer's label. These must be unique on your Account.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of Tags applied to this object.  Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Transfer",
			"name": "transfer",
			"type": "json",
			"default": "{\n  \"in\": 28.91200828552246,\n  \"out\": 3.5487728118896484,\n  \"total\": 32.46078109741211\n}",
			"description": "Information about the amount of transfer this NodeBalancer has had so far this month.\n",
			"routing": {
				"send": {
					"property": "transfer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Updated",
			"name": "updated",
			"type": "string",
			"default": "2018-03-01T00:01:01",
			"description": "When this NodeBalancer was last updated.\n",
			"routing": {
				"send": {
					"property": "updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Configs"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Configs"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Configs"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Configs"
					]
				}
			}
		},
		{
			"displayName": "POST /nodebalancers/{nodeBalancerId}/configs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Algorithm",
			"name": "algorithm",
			"type": "options",
			"default": "roundrobin",
			"description": "What algorithm this NodeBalancer should use for routing traffic to backends.\n",
			"options": [
				{
					"name": "Roundrobin",
					"value": "roundrobin"
				},
				{
					"name": "Leastconn",
					"value": "leastconn"
				},
				{
					"name": "Source",
					"value": "source"
				}
			],
			"routing": {
				"send": {
					"property": "algorithm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check",
			"name": "check",
			"type": "options",
			"default": "http_body",
			"description": "The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.\n* If `none` no check is performed.\n* `connection` requires only a connection to the backend to succeed.\n* `http` and `http_body` rely on the backend serving HTTP, and that\n  the response returned matches what is expected.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Connection",
					"value": "connection"
				},
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "HTTP Body",
					"value": "http_body"
				}
			],
			"routing": {
				"send": {
					"property": "check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Attempts",
			"name": "check_attempts",
			"type": "number",
			"default": 3,
			"description": "How many times to attempt a check before considering a backend to be down.\n",
			"routing": {
				"send": {
					"property": "check_attempts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Body",
			"name": "check_body",
			"type": "string",
			"default": "it works",
			"description": "This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.\n",
			"routing": {
				"send": {
					"property": "check_body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Interval",
			"name": "check_interval",
			"type": "number",
			"default": 90,
			"description": "How often, in seconds, to check that backends are up and serving requests.\n\nMust be greater than `check_timeout`.\n",
			"routing": {
				"send": {
					"property": "check_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Passive",
			"name": "check_passive",
			"type": "boolean",
			"default": true,
			"description": "If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.\n",
			"routing": {
				"send": {
					"property": "check_passive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Path",
			"name": "check_path",
			"type": "string",
			"default": "/test",
			"description": "The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.\n",
			"routing": {
				"send": {
					"property": "check_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Timeout",
			"name": "check_timeout",
			"type": "number",
			"default": 10,
			"description": "How long, in seconds, to wait for a check attempt before considering it failed.\n\nMust be less than `check_interval`.\n",
			"routing": {
				"send": {
					"property": "check_timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Cipher Suite",
			"name": "cipher_suite",
			"type": "options",
			"default": "recommended",
			"description": "What ciphers to use for SSL connections served by this NodeBalancer.\n\n* `legacy` is considered insecure and should only be used if necessary.\n",
			"options": [
				{
					"name": "Recommended",
					"value": "recommended"
				},
				{
					"name": "Legacy",
					"value": "legacy"
				}
			],
			"routing": {
				"send": {
					"property": "cipher_suite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 4567,
			"description": "This config's unique ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancer ID",
			"name": "nodebalancer_id",
			"type": "number",
			"default": 12345,
			"description": "The ID for the NodeBalancer this config belongs to.\n",
			"routing": {
				"send": {
					"property": "nodebalancer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Nodes Status",
			"name": "nodes_status",
			"type": "json",
			"default": "{\n  \"down\": 0,\n  \"up\": 4\n}",
			"description": "A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.\n",
			"routing": {
				"send": {
					"property": "nodes_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 80,
			"description": "The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.\n",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "http",
			"description": "The protocol this port is configured to serve.\n\n* The `http` and `tcp` protocols do not support `ssl_cert` and `ssl_key`.\n\n* The `https` protocol is mutually required with `ssl_cert` and `ssl_key`.\n\nReview our guide on [Available Protocols](/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.\n",
			"options": [
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "HTTPS",
					"value": "https"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Proxy Protocol",
			"name": "proxy_protocol",
			"type": "options",
			"default": "none",
			"description": "ProxyProtocol is a TCP extension that sends initial TCP connection information such as source/destination IPs and ports to backend devices. This information would be lost otherwise. Backend devices must be configured to work with ProxyProtocol if enabled.\n\n* If ommited, or set to `none`, the NodeBalancer doesn't send any auxilary data over TCP connections. This is the default.\n* If set to `v1`, the human-readable header format (Version 1) is used. Requires `tcp` protocol.\n* If set to `v2`, the binary header format (Version 2) is used. Requires `tcp` protocol.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "v1",
					"value": "v1"
				},
				{
					"name": "v2",
					"value": "v2"
				}
			],
			"routing": {
				"send": {
					"property": "proxy_protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Cert",
			"name": "ssl_cert",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL\ncertificate and Certificate Authority chain) that should be served on this\nNodeBalancerConfig's port.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI).\n\n[Diffie-Hellman Parameters](/docs/products/networking/nodebalancers/guides/ssl-termination/#diffie-hellman-parameters) can be included in this value to enable forward secrecy.\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_cert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Commonname",
			"name": "ssl_commonname",
			"type": "string",
			"default": "www.example.com",
			"description": "The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_commonname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Fingerprint",
			"name": "ssl_fingerprint",
			"type": "string",
			"default": "00:01:02:03:04:05:06:07:08:09:0A:0B:0C:0D:0E:0F:10:11:12:13",
			"description": "The read-only SHA1-encoded fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_fingerprint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Key",
			"name": "ssl_key",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI).\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Stickiness",
			"name": "stickiness",
			"type": "options",
			"default": "http_cookie",
			"description": "Controls how session stickiness is handled on this port.\n* If set to `none` connections will always be assigned a backend based on the algorithm configured.\n* If set to `table` sessions from the same remote address will be routed to the same\n  backend.\n\n* For HTTP or HTTPS clients, `http_cookie` allows sessions to be\n  routed to the same backend based on a cookie set by the NodeBalancer.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Table",
					"value": "table"
				},
				{
					"name": "HTTP Cookie",
					"value": "http_cookie"
				}
			],
			"routing": {
				"send": {
					"property": "stickiness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "DELETE /nodebalancers/{nodeBalancerId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "PUT /nodebalancers/{nodeBalancerId}/configs/{configId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Algorithm",
			"name": "algorithm",
			"type": "options",
			"default": "roundrobin",
			"description": "What algorithm this NodeBalancer should use for routing traffic to backends.\n",
			"options": [
				{
					"name": "Roundrobin",
					"value": "roundrobin"
				},
				{
					"name": "Leastconn",
					"value": "leastconn"
				},
				{
					"name": "Source",
					"value": "source"
				}
			],
			"routing": {
				"send": {
					"property": "algorithm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check",
			"name": "check",
			"type": "options",
			"default": "http_body",
			"description": "The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.\n* If `none` no check is performed.\n* `connection` requires only a connection to the backend to succeed.\n* `http` and `http_body` rely on the backend serving HTTP, and that\n  the response returned matches what is expected.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Connection",
					"value": "connection"
				},
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "HTTP Body",
					"value": "http_body"
				}
			],
			"routing": {
				"send": {
					"property": "check",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Attempts",
			"name": "check_attempts",
			"type": "number",
			"default": 3,
			"description": "How many times to attempt a check before considering a backend to be down.\n",
			"routing": {
				"send": {
					"property": "check_attempts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Body",
			"name": "check_body",
			"type": "string",
			"default": "it works",
			"description": "This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.\n",
			"routing": {
				"send": {
					"property": "check_body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Interval",
			"name": "check_interval",
			"type": "number",
			"default": 90,
			"description": "How often, in seconds, to check that backends are up and serving requests.\n\nMust be greater than `check_timeout`.\n",
			"routing": {
				"send": {
					"property": "check_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Passive",
			"name": "check_passive",
			"type": "boolean",
			"default": true,
			"description": "If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.\n",
			"routing": {
				"send": {
					"property": "check_passive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Path",
			"name": "check_path",
			"type": "string",
			"default": "/test",
			"description": "The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.\n",
			"routing": {
				"send": {
					"property": "check_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Check Timeout",
			"name": "check_timeout",
			"type": "number",
			"default": 10,
			"description": "How long, in seconds, to wait for a check attempt before considering it failed.\n\nMust be less than `check_interval`.\n",
			"routing": {
				"send": {
					"property": "check_timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Cipher Suite",
			"name": "cipher_suite",
			"type": "options",
			"default": "recommended",
			"description": "What ciphers to use for SSL connections served by this NodeBalancer.\n\n* `legacy` is considered insecure and should only be used if necessary.\n",
			"options": [
				{
					"name": "Recommended",
					"value": "recommended"
				},
				{
					"name": "Legacy",
					"value": "legacy"
				}
			],
			"routing": {
				"send": {
					"property": "cipher_suite",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 4567,
			"description": "This config's unique ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancer ID",
			"name": "nodebalancer_id",
			"type": "number",
			"default": 12345,
			"description": "The ID for the NodeBalancer this config belongs to.\n",
			"routing": {
				"send": {
					"property": "nodebalancer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Nodes Status",
			"name": "nodes_status",
			"type": "json",
			"default": "{\n  \"down\": 0,\n  \"up\": 4\n}",
			"description": "A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.\n",
			"routing": {
				"send": {
					"property": "nodes_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Port",
			"name": "port",
			"type": "number",
			"default": 80,
			"description": "The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.\n",
			"routing": {
				"send": {
					"property": "port",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"type": "options",
			"default": "http",
			"description": "The protocol this port is configured to serve.\n\n* The `http` and `tcp` protocols do not support `ssl_cert` and `ssl_key`.\n\n* The `https` protocol is mutually required with `ssl_cert` and `ssl_key`.\n\nReview our guide on [Available Protocols](/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.\n",
			"options": [
				{
					"name": "HTTP",
					"value": "http"
				},
				{
					"name": "HTTPS",
					"value": "https"
				},
				{
					"name": "Tcp",
					"value": "tcp"
				}
			],
			"routing": {
				"send": {
					"property": "protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Proxy Protocol",
			"name": "proxy_protocol",
			"type": "options",
			"default": "none",
			"description": "ProxyProtocol is a TCP extension that sends initial TCP connection information such as source/destination IPs and ports to backend devices. This information would be lost otherwise. Backend devices must be configured to work with ProxyProtocol if enabled.\n\n* If ommited, or set to `none`, the NodeBalancer doesn't send any auxilary data over TCP connections. This is the default.\n* If set to `v1`, the human-readable header format (Version 1) is used. Requires `tcp` protocol.\n* If set to `v2`, the binary header format (Version 2) is used. Requires `tcp` protocol.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "v1",
					"value": "v1"
				},
				{
					"name": "v2",
					"value": "v2"
				}
			],
			"routing": {
				"send": {
					"property": "proxy_protocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Cert",
			"name": "ssl_cert",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL\ncertificate and Certificate Authority chain) that should be served on this\nNodeBalancerConfig's port.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI).\n\n[Diffie-Hellman Parameters](/docs/products/networking/nodebalancers/guides/ssl-termination/#diffie-hellman-parameters) can be included in this value to enable forward secrecy.\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_cert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Commonname",
			"name": "ssl_commonname",
			"type": "string",
			"default": "www.example.com",
			"description": "The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_commonname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Fingerprint",
			"name": "ssl_fingerprint",
			"type": "string",
			"default": "00:01:02:03:04:05:06:07:08:09:0A:0B:0C:0D:0E:0F:10:11:12:13",
			"description": "The read-only SHA1-encoded fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_fingerprint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "SSL Key",
			"name": "ssl_key",
			"type": "string",
			"default": "<REDACTED>",
			"description": "The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.\n\nLine breaks must be represented as \"\\n\" in the string for requests (but not when using the Linode CLI).\n\nThe contents of this field will not be shown in any responses that display\nthe NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field\nappears.\n\nThe read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig\nresponse are automatically derived from your certificate. Please refer to these fields to\nverify that the appropriate certificate was assigned to your NodeBalancerConfig.\n",
			"routing": {
				"send": {
					"property": "ssl_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Stickiness",
			"name": "stickiness",
			"type": "options",
			"default": "http_cookie",
			"description": "Controls how session stickiness is handled on this port.\n* If set to `none` connections will always be assigned a backend based on the algorithm configured.\n* If set to `table` sessions from the same remote address will be routed to the same\n  backend.\n\n* For HTTP or HTTPS clients, `http_cookie` allows sessions to be\n  routed to the same backend based on a cookie set by the NodeBalancer.\n",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Table",
					"value": "table"
				},
				{
					"name": "HTTP Cookie",
					"value": "http_cookie"
				}
			],
			"routing": {
				"send": {
					"property": "stickiness",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config Nodes"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config Nodes"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config Nodes"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Config Nodes"
					]
				}
			}
		},
		{
			"displayName": "POST /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "192.168.210.120:80",
			"description": "The private IP Address where this backend can be reached. This _must_ be a private IP address.\n",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 4567,
			"description": "The NodeBalancer Config ID that this Node belongs to.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 54321,
			"description": "This node's unique ID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "node54321",
			"description": "The label for this node.  This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "accept",
			"description": "The mode this NodeBalancer should use when sending traffic to this backend.\n* If set to `accept` this backend is accepting traffic.\n* If set to `reject` this backend will not receive traffic.\n* If set to `drain` this backend will not receive _new_ traffic, but connections already\n  pinned to it will continue to be routed to it.\n\n* If set to `backup`, this backend will only receive traffic if all `accept` nodes\n  are down.\n",
			"options": [
				{
					"name": "Accept",
					"value": "accept"
				},
				{
					"name": "Reject",
					"value": "reject"
				},
				{
					"name": "Drain",
					"value": "drain"
				},
				{
					"name": "Backup",
					"value": "backup"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancer ID",
			"name": "nodebalancer_id",
			"type": "number",
			"default": 12345,
			"description": "The NodeBalancer ID that this Node belongs to.\n",
			"routing": {
				"send": {
					"property": "nodebalancer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "UP",
			"description": "The current status of this node, based on the configured checks of its NodeBalancer Config.\n",
			"options": [
				{
					"name": "Unknown",
					"value": "unknown"
				},
				{
					"name": "UP",
					"value": "UP"
				},
				{
					"name": "DOWN",
					"value": "DOWN"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 50,
			"description": "Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.\n",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Create Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "DELETE /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer Config Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Delete Node Balancer Config Node"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Get Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "PUT /nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "192.168.210.120:80",
			"description": "The private IP Address where this backend can be reached. This _must_ be a private IP address.\n",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Config ID",
			"name": "config_id",
			"type": "number",
			"default": 4567,
			"description": "The NodeBalancer Config ID that this Node belongs to.\n",
			"routing": {
				"send": {
					"property": "config_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 54321,
			"description": "This node's unique ID.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "node54321",
			"description": "The label for this node.  This is for display purposes only.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "accept",
			"description": "The mode this NodeBalancer should use when sending traffic to this backend.\n* If set to `accept` this backend is accepting traffic.\n* If set to `reject` this backend will not receive traffic.\n* If set to `drain` this backend will not receive _new_ traffic, but connections already\n  pinned to it will continue to be routed to it.\n\n* If set to `backup`, this backend will only receive traffic if all `accept` nodes\n  are down.\n",
			"options": [
				{
					"name": "Accept",
					"value": "accept"
				},
				{
					"name": "Reject",
					"value": "reject"
				},
				{
					"name": "Drain",
					"value": "drain"
				},
				{
					"name": "Backup",
					"value": "backup"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Nodebalancer ID",
			"name": "nodebalancer_id",
			"type": "number",
			"default": 12345,
			"description": "The NodeBalancer ID that this Node belongs to.\n",
			"routing": {
				"send": {
					"property": "nodebalancer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "UP",
			"description": "The current status of this node, based on the configured checks of its NodeBalancer Config.\n",
			"options": [
				{
					"name": "Unknown",
					"value": "unknown"
				},
				{
					"name": "UP",
					"value": "UP"
				},
				{
					"name": "DOWN",
					"value": "DOWN"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 50,
			"description": "Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.\n",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Update Node Balancer Node"
					]
				}
			}
		},
		{
			"displayName": "POST /nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Rebuild Node Balancer Config"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Nodes",
			"name": "nodes",
			"type": "json",
			"default": "[\n  {\n    \"address\": \"192.168.210.120:80\",\n    \"id\": 54321,\n    \"label\": \"node54321\",\n    \"mode\": \"accept\",\n    \"weight\": 50\n  }\n]",
			"description": "The NodeBalancer Node(s) that serve this Config.\n\nSome considerations for Nodes when rebuilding a config:\n  * Current Nodes excluded from the request body will be deleted from the Config.\n  * Current Nodes (identified by their Node ID) will be updated.\n  * New Nodes (included without a Node ID) will be created.\n",
			"routing": {
				"send": {
					"property": "nodes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Rebuild Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"Rebuild Node Balancer Config"
					]
				}
			}
		},
		{
			"displayName": "GET /nodebalancers/{nodeBalancerId}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"GET Nodebalancers Stats"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Node Balancers"
					],
					"operation": [
						"GET Nodebalancers Stats"
					]
				}
			}
		},
];
